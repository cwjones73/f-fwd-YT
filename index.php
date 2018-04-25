<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>f-fwd-yt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css" />
    <script src="js/jquery-1.3.2.js"></script>
    <script src="js/script-head.js.js"></script>
 

</head>
<body>
    <ul>
    <a id="start" class="videolink" onclick="LoadVideo(270,407)">   <li>Start</li>  </a>
    <a id="middle" class="videolink" onclick="LoadVideo(553,690)">  <li>Middle</li> </a>
    <a id="final" class="videolink" onclick="LoadVideo(720,975)">   <li>Final</li>  </a>
    </ul>
    <div class="overlay" id="overlay" style="display:none;"></div>
     <div class="box" id="box">
         <a class="boxclose" id="boxclose" onclick="deleteVideo()";></a>
          <iframe width="560" id="VideoPlayer" height="315" src="" frameborder="0" allowfullscreen></iframe>
          <div class="title" id="vTitle"></div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/script-foot.js"></script>

</body>
</html>