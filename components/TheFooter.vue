<template>
    <footer :class="{'to-switch-color': this.$store.state.switchFooter}">
        <div class="container lg no-padding">
            <div class="cols break3">
                <div class="col">
                    <div class="content">
                        <div class="title title-sm">Get in Touch</div>
                        <p><a href="mailto: hello@thecabinetagency.com">hello@thecabinetagency.com</a></p>
                        <p><a href="tel: 44 (0) 20 7101 3939">+44 (0) 20 7101 3939</a></p>
                    </div>
                    <div class="social">
                        <li><a class="is-img" href="https://www.youtube.com/channel/UCiMR0obaxBoOkr9r_1IfpXw" target="_blank"><i class="icon-youtube"></i></a></li>
                        <li><a class="is-img" href="https://www.instagram.com/thecabinetagency" target="_blank"><i class="icon-instagram"></i></a></li>
                        <li><a class="is-img" href="https://www.linkedin.com/company/thecabinet" target="_blank"><i class="icon-linkedin"></i></a></li>
                        <li class="alt-only"><a class="is-img" href="https://open.spotify.com/user/aie9e1heuv13jrq3tfjzqxsp9?si=qFMDuDhMQdmH339H52lzKQ" target="_blank"><i class="icon-spotify"></i></a></li>
                    </div>
                </div>
                <div class="col">
                    <div class="content">
                        <div class="title title-sm">Sign up for our <br> latest insights</div>
                        <div class="form">
                            <!--Begin mc_embed_signup-->
                            <div id="mc_embed_signup">
                                <form action="https://thecabinetagency.us4.list-manage.com/subscribe/post?u=2133668071edce671b1f4b1ab&amp;id=2eec1eb84a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div class="mc-field-group field">
                                            <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="you@email.com">
                                            <div class="clear button"><input type="submit" value="⟶" name="subscribe" id="mc-embedded-subscribe"></div>
                                        </div>
                                        <div id="mce-responses" class="clear">
                                            <div class="response text-sm" id="mce-success-response" style="display:none"></div>
                                        </div>
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2133668071edce671b1f4b1ab_2eec1eb84a" tabindex="-1" value=""></div>
                                    </div>
                                </form>
                            </div>
                            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='MMERGE3';ftypes[3]='text';fnames[4]='MMERGE4';ftypes[4]='text';fnames[5]='MMERGE5';ftypes[5]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
                            <!--End mc_embed_signup-->
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="content">
                        <a class="logo-main is-img" href="/">TheCabinet</a>
                        <ul class="legal">
                            <li>&copy;TheCabinet</li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

