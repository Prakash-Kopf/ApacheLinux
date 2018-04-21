<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>mod_allowmethods - Servidor HTTP Apache Versi�n 2.5</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="../style/css/prettify.css" />
<script src="../style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="../images/favicon.ico" rel="shortcut icon" /></head>
<body>
<div id="page-header">
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p>
<p class="apache">Versi�n 2.5 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.png" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci�n</a> &gt; <a href="../">Versi�n 2.5</a> &gt; <a href="./">M�dulos</a></div>
<div id="page-content">
<div id="preamble"><h1>M�dulo Apache mod_allowmethods</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../en/mod/mod_allowmethods.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/mod_allowmethods.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/mod_allowmethods.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a></p>
</div>
<table class="module"><tr><th><a href="module-dict.html#Description">Descripci�n:</a></th><td>Restringe f�cilmente qu� m�todos HTTP pueden ser usados en el servidor</td></tr>
<tr><th><a href="module-dict.html#Status">Estado:</a></th><td>Experimental</td></tr>
<tr><th><a href="module-dict.html#ModuleIdentifier">Identificador de M�dulos:</a></th><td>allowmethods_module</td></tr>
<tr><th><a href="module-dict.html#SourceFile">Fichero de C�digo Fuente:</a></th><td>mod_allowmethods.c</td></tr></table>
<h3>Resumen de contenidos</h3>

<p>�ste m�dulo hace f�cil restringir qu� m�todos pueden ser usados en el servidor. 
	La configuraci�n m�s com�n ser�a:</p>

<pre class="prettyprint lang-config">&lt;Location "/"&gt;
   AllowMethods GET POST OPTIONS
&lt;/Location&gt;</pre>


</div>
<div id="quickview"><h3 class="directives">Directivas</h3>
<ul id="toc">
<li><img alt="" src="../images/down.gif" /> <a href="#allowmethods">AllowMethods</a></li>
</ul>
<h3>Lista de comprobaci�n de errores corregidos</h3><ul class="seealso"><li><a href="https://www.apache.org/dist/httpd/CHANGES_2.4">httpd historial de cambios</a></li><li><a href="https://bz.apache.org/bugzilla/buglist.cgi?bug_status=__open__&amp;list_id=144532&amp;product=Apache%20httpd-2&amp;query_format=specific&amp;order=changeddate%20DESC%2Cpriority%2Cbug_severity&amp;component=mod_allowmethods">Problemas Conocidos</a></li><li><a href="https://bz.apache.org/bugzilla/enter_bug.cgi?product=Apache%20httpd-2&amp;component=mod_allowmethods">Reportar un error</a></li></ul><h3>Consulte tambi�n</h3>
<ul class="seealso">
<li><a href="#comments_section">Comentarios</a></li></ul></div>

<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="allowmethods" id="allowmethods">Directiva</a> <a name="AllowMethods" id="AllowMethods">AllowMethods</a><a title="Enlace permanente" href="#allowmethods" class="permalink">&para;</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Restringe acceso a los m�todos HTTP indicados</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>AllowMethods reset|<em>HTTP-method</em>
[<em>HTTP-method</em>]...</code></td></tr>
<tr><th><a href="directive-dict.html#Default">Valor por defecto:</a></th><td><code>AllowMethods reset</code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>directory</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Experimental</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_allowmethods</td></tr>
</table>

<p>Los m�todos HTTP son sensibles a may�sculas y son generalmente, seg�n RFC, indicados en may�sculas. Los m�todos GET y HEAD se tratan como equivalentes. La palabra clave <code>reset</code> puede ser usada para desactivar
 <code class="module"><a href="../mod/mod_allowmethods.html">mod_allowmethods</a></code> en un contexto anidado m�s profundo:</p>

<pre class="prettyprint lang-config">&lt;Location "/svn"&gt;
   AllowMethods reset
&lt;/Location&gt;</pre>


<div class="note"><h3>Precauci�n</h3>
  <p>No se puede restringir el m�todo TRACE con este m�dulo;
  use <code class="directive"><a href="../mod/core.html#traceenable">TraceEnable</a></code> en su lugar.</p>
</div>

<p><code class="module"><a href="../mod/mod_allowmethods.html">mod_allowmethods</a></code> fue escrito para reemplazar la implementaci�n m�s engorrosa de
<code class="directive"><a href="../mod/core.html#limit">Limit</a></code> y
<code class="directive"><a href="../mod/core.html#limitexcept">LimitExcept</a></code>.</p>

</div>
</div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../en/mod/mod_allowmethods.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/mod_allowmethods.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/mod_allowmethods.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="../images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Freenode, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/trunk/mod/mod_allowmethods.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else {
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2018 The Apache Software Foundation.<br />Licencia bajo los t�rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>