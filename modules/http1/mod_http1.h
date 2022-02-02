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

/**
 * Adjust r->server and r->connection keepalive handling, update counters
 * and set necessary headers in resp->headers for HTTP/1.x keepalive handling.
 * @param r the request being processed
 * @param resp the response being sent
 */
int http1_set_keepalive(request_rec *r, ap_bucket_headers *resp);

/**
 * Append the headers in HTTP/1.1 format to the brigade.
 */
apr_status_t http1_append_headers(apr_bucket_brigade *bb,
                                  request_rec *r,
                                  apr_table_t *headers);

/**
 * Append the header terminating CRLF line to the brigade
 */
void http1_terminate_header(apr_bucket_brigade *bb);
