<!DOCTYPE html>
<html lang="en">
<head>
  <?php include 'head.php' ?>
</head>
<body>
  <section class="page">
    <?php include 'header-contact.php' ?>

    <div class="clearfix"></div>

    <main>

      <section class="container">
        <div class="row">
          <div class="btn-group btn-breadcrumb">
            <a href="index.php" title="Architects Hull &amp; Beverley" class="btn"><i class="glyphicon glyphicon-home"></i></a>
            <a href="contact.php" title="Alessandro Caruso Architecture Interiors - Contact" class="btn btn-success">Contact</a>
          </div>
        </div>
      </section>

      <section class="container pageContent bottomPad BreadCrumbTopPad end">
        <div class="row bothPad">
          <div class="col-xs-12">
            <h1 class="homePageTitle">We are a people business, lets talk!</h1>
            <hr/>
          </div>
        </div>

        <div class="row bottomPad">
          <div class="col-xs-12">
            <p>ACA+I provide architecture, visualisation, master-planning, interior design, project management and CDM-Coordination services. Using the latest 3D technologies, communication, quick response, turnaround and specialist knowledge are what makes ACA+I perfect for private and public organisations in Healthcare, Education, Commercial, Conservation and Residential Sectors.</p>
            <p>If you have a project that you think we could help you with, please fill in the below form or contact us at any of our offices...let talk!</p>
          </div>
        </div>
      </section>

      <div class="clearfix"></div>

      <section class="projectBlueBackground">
        <div class="projectBlueBackgroundTop topTriangle"></div>
        <div class="widowBackDrop"></div>

        <section class="container contactContent">
          <div class="row bothPad">
            <div class="col-xs-12 col-sm-6 col-sm-offset-6">
              <div id="message"></div>

              <form action="http://www.aca-i.com/sendmail" method="post" accept-charset="utf-8" class="form">                    <div class="control-group form-group">
                <div class="controls">
                  <label for="name" class="control-label">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" name="name">
                </div>
              </div>
              <div class="control-group form-group">
                <div class="controls">
                  <label for="email" class="control-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Email" name="email">
                </div>
              </div>
              <div class="control-group form-group">
                <label for="phone" class="control-label">Phone</label>
                <div class="controls">
                  <input type="tel" class="form-control" id="phone" placeholder="Phone Number" name="phone">
                </div>
              </div>
              <div class="control-group form-group">
                <div class="controls">
                  <label for="message" class="control-label">Message</label>
                  <textarea rows="10" cols="100" class="form-control" id="message" placeholder="Message" name="message" maxlength="999" style="resize:none"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                  <div class="control-group form-group">
                    <div class="controls">
                      <div class="g-recaptcha" data-sitekey="6LeuYw4UAAAAALVmAmc0PAzU3lmwp4qOzp_n--8g"></div>
                      <span id="span_g-recaptcha-response" class="help-block">Prove Your Human</span>
                    </div>
                  </div>
                  <div id="success"></div>
                  <!-- For success/fail messages -->
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                  <button type="submit" class="btn btn-success button" id="submit">SEND</button>
                </div>
              </div>
            </form>

            <img src="images/coffee.png" alt="" class="img-responsive contactImg hidden-xs" />
          </div>
        </div>
      </section>

      <div class="whiteTriangle"></div>

    </section>


    <section class="projectGreenBackground panelBorder end">
      <div class="projectGreenBackgroundTop topTriangleReverse"></div>
      <div class="cityBackDrop"></div>

      <section class="container pageContent contactContent">
        <div class="row bothPad">
          <div class="col-xs-12">
            <div class="addressContainer">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4">
                  <h2>Beverley Office (HQ)</h2>
                  <hr class="edgeLine" />

                  <address class="equalHeight">
                    <strong>5 Brookholme</strong><br/>
                    Beverley<br>
                    East Riding of Yorkshire<br/>
                    HU17 0TQ<br/>
                    UK<br>
                  </address>

                  <p><i class="fa fa-phone contactPhoneIcon" aria-hidden="true" title="Phone"></i> 01482 869977</p>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4">
                  <h2>Surrey Office</h2>
                  <hr class="edgeLine" />

                  <address class="equalHeight">
                    <strong>30 High Street</strong><br/>
                    Kingston upon Thames<br/>
                    Surrey<br/>
                    KT1 1HL<br/>
                    UK<br/>
                  </address>

                  <p><i class="fa fa-phone contactPhoneIcon" aria-hidden="true" title="Phone"></i> 02033 880578</p>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4">
                  <h2>Doncaster Office</h2>
                  <hr class="edgeLine" />

                  <address class="equalHeight">
                    <strong>Apex Office Space</strong><br/>
                    1 Watervole Way<br/>
                    Balby<br/>
                    Doncaster<br/>
                    DN4 5JP<br/>
                    UK<br/>

                  </address>

                  <p><i class="fa fa-phone contactPhoneIcon" aria-hidden="true" title="Phone"></i> 01302 378901</p>
                </div>
              </div>
            </div>
            <img src="images/directions.png" alt="" class="img-responsive signsImg hidden-xs" />
          </div>
        </div>
      </section>

      <div class="whiteTriangleReverse"></div>

    </section>

    <div class="clearfix"></div>

    </main>

  <?php include 'footer.php' ?>

  </section>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<!-- Responsive Bootstrap Toolkit -->
<script src="js/bootstrap-toolkit.min.js"></script>
<!-- Match Height -->
<script src="js/jquery.matchHeight-min.js"></script>
<!--  GSAP Animation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
<!-- JS Controls -->
<script src="js/main.js"></script>
<!-- JS Home -->
<script src="js/contact.js"></script>

</body>

</html>
