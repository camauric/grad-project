<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/bootstrap.min.css">

        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>-->
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-logo" href="#"><img  width="300" src="img/neiu-logo.png" /></a>
        </div>
        <!--<div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="form">
            <div class="form-group">
              <input type="text" placeholder="Email" class="form-control">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control">
            </div>
            <button type="submit" class="btn btn-success">Sign in</button>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <!--<h1>Ask, world!</h1>-->
        <div class="input-group" ng-controller="InputController">
        <form name="questionSearch" id="questionSearch" class="navbar-form-lg col-md-8 col-lg-10" role="search">
        <div class="input-group">
            <input type="text" class="form-control" value=""placeholder="Ask a question" name="srch_term"  id="srch_term" required>
            <div class="input-group-btn">
                <button class="btn btn-default" id="search_button" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>

        </div>
      </div>
        </form>

        <!--<p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>-->
      </div>
    </div>

    <div class="container main_body">


    </div> <!-- /container -->
    <footer>
     <header>
      <div class="container">

        <p class="logo col-lg-6">Northeastern Illinois University</p>

        <nav class="social col-lg-6">
          <a class="twitter" href="http://www.neiu.edu/twitter" target="_blank">Twitter</a>
          <a class="facebook" href="http://www.neiu.edu/facebook" target="_blank">Facebook</a>
          <a class="linkedin" href="http://www.neiu.edu/linkedin" target="_blank">LinkedIn</a>
          <a class="youtube" href="http://www.neiu.edu/youtube" target="_blank">YouTube</a>
          <a class="flickr" href="http://www.neiu.edu/flickr" target="_blank">Flickr</a>
        </nav>

      </div>
  </header>
  <div id="footer">
        <div class="container">

          <section class="buttons col-md-3 col-sm-10">

            <p><a href="http://www.neiu.edu/apply">Apply to Northeastern</a></p>
            <p><a href="http://www.neiu.edu//alumni-and-giving/giving/donate">Support Northeastern</a></p>

          </section>

          <section class="contact col-md-3 col-sm-10">
            <h1>Contact Us</h1>
            <p>College of Graduate Studies and Research<br>
              5500 North St. Louis Avenue<br>
              Chicago, Illinois 60625-4699<br>
              (773) 442-6012<br>
          </p></section>

          <section class="infofor1 col-md-3 col-sm-10">
            <h1>Info for</h1>

            <ul>
                <li><a href="http://www.neiu.edu//future-students/" class="">Future undergraduate students</a></li>
                <li><a href="http://neiu.edu/academics/graduate-college" class="">Future graduate students</a></li>
                <li><a href="http://neiu.edu/future-students/veteran-services/" class="">Veterans</a></li>
                <li><a href="http://neiu.edu/future-students/transfer-center/" class="">Transfer students</a></li>
                <li><a href="http://neiu.edu/future-students/how-apply/international-applicants" class="">International students</a></li>
            </ul>

          </section>

          <section class="infofor2 col-md-3 col-sm-10">
            <ul>
                <li><a href="http://neiu.edu/future-students/new-student-family-programs" class="">Parents &amp; families</a></li>
                <li><a href="http://neiu.edu/alumni-and-giving/alumni/" class="">Alumni</a></li>
                <li><a href="http://neiu.edu/about/community-visitor-guide/" class="">Community members</a></li>
                <li><a href="http://neiu.edu/about/working-here/" class="">Job applicants</a></li>
            </ul>
          </section>

        </div>
      </div>
      </footer>
      <div class="footer_copyright"></div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4/angular-sanitize.js></script>-->

        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/vendor/purify.min.js"></script>
        <script src="js/sharedfunctions.js"></script>
        <script src="js/findAnswer.js"></script>
        <script src="js/userInput.js"></script>
        <script src="js/tokens.js"></script>
        <script src="js/stopwords.js"></script>
        <script src="js/wordstemmer.js"></script>
        <script src="js/qs_and_as.json"></script>
        <script src="js/buildMatrix.js"></script>
        <script src="js/compareTokens.js"></script>
        <script src="js/topthreequestion.js"></script>
        <script src="js/app.js"></script>



        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
