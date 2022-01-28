/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "apr_strings.h"
#include "apr_thread_proc.h"    /* for RLIMIT stuff */

#define APR_WANT_STRFUNC
#include "apr_want.h"

#include "httpd.h"
#include "http_core.h"
#include "http_protocol.h"   /* For index_of_response().  Grump. */
#include "http_request.h"

#include "util_filter.h"
#include "util_ebcdic.h"
#include "ap_mpm.h"
#include "scoreboard.h"

#include "mod_core.h"

/* Handles for core http/1.x filters */
AP_DECLARE_DATA ap_filter_rec_t *ap_chunk_filter_handle;
AP_DECLARE_DATA ap_filter_rec_t *ap_http1_transcode_out_filter_handle;
AP_DECLARE_DATA ap_filter_rec_t *ap_http1_transcode_in_filter_handle;


static int http1_create_request(request_rec *r)
{
    if (!r->main && !r->prev
        && !strcmp(AP_PROTOCOL_HTTP1, ap_get_protocol(r->connection))) {
        ap_add_output_filter_handle(ap_http1_transcode_out_filter_handle,
                                    NULL, r, r->connection);
    }

    return OK;
}


static void register_hooks(apr_pool_t *p)
{
    ap_hook_create_request(http1_create_request, NULL, NULL, APR_HOOK_REALLY_LAST);

    ap_http1_transcode_out_filter_handle =
        ap_register_output_filter("HTTP1_TRANSCODE_OUT", ap_http1_transcode_out_filter,
                                  NULL, AP_FTYPE_TRANSCODE);
    ap_chunk_filter_handle =
        ap_register_output_filter("CHUNK", ap_http_chunk_filter,
                                  NULL, AP_FTYPE_TRANSCODE + 1);
    ap_http1_transcode_in_filter_handle =
        ap_register_input_filter("HTTP1_TRANSCODE_IN", ap_http1_transcode_in_filter,
                                 NULL, AP_FTYPE_TRANSCODE);
}

AP_DECLARE_MODULE(http1) = {
    STANDARD20_MODULE_STUFF,
    NULL,              /* create per-directory config structure */
    NULL,              /* merge per-directory config structures */
    NULL,              /* create per-server config structure */
    NULL,              /* merge per-server config structures */
    NULL,              /* command apr_table_t */
    register_hooks     /* register hooks */
};
