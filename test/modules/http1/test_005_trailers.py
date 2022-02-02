import os
import pytest

from .env import H1Conf


# The trailer tests depend on "nghttp" as no other client seems to be able to send those
# rare things.
class TestTrailers:

    @pytest.fixture(autouse=True, scope='class')
    def _class_scope(self, env):
        H1Conf(env).add_vhost_cgi(proxy_self=True).install()
        assert env.apache_restart() == 0

    # check that we get a trailer out when telling the handler to add one
    def test_h1_005_01(self, env):
        url = env.mkurl("https", "cgi", "/h1test/echo")
        host = f"cgi.{env.http_tld}"
        fpath = os.path.join(env.gen_dir, "data-1k")
        r = env.curl_upload(url, fpath, options=["--header", "Add-Trailer: 005_01"])
        assert r.exit_code == 0, f"{r}"
        assert 200 <= r.response["status"] < 300
        assert r.response["trailer"]["h1test-add-trailer"] == "005_01"
