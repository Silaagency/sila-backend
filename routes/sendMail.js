const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res, next) => {
    const userEmail = req.body.userEmail;
    const userName = req.body.userName;

    const config = {
        service: 'gmail',
        auth: {
            user: 'Silamarketingg@gmail.com',
            pass: 'nqct ydan hhjv ohgz'
        }
    }

    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'Silamarketingg@gmail.com',
        to: userEmail,
        subject: 'Welcome to Sila Agency!',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New Template</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Imprima&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        .rollover:hover .rollover-first {
          max-height:0px!important;
          display:none!important;
          }
          .rollover:hover .rollover-second {
          max-height:none!important;
          display:block!important;
          }
          .rollover span {
          font-size:0px;
          }
          u + .body img ~ div div {
          display:none;
          }
          #outlook a {
          padding:0;
          }
          span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color:inherit;
          mso-style-priority:99;
          }
          a.es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-button-border:hover > a.es-button {
          color:#ffffff!important;
          }
        @media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } a.es-button, button.es-button { border-top-width:15px!important; border-bottom-width:15px!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#ffffff"></v:fill>
              </v:background>
            <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#bcb8b1" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_90e5e97b82a5066353993a871610856db81a05db39127c066c3153ec0949412b/images/silalogo.jpg" alt="Logo" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" title="Logo" class="adapt-img" height="195" width="196"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;border-radius:20px 20px 0 0;width:600px" role="none">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0"><h1 align="center" style="Margin:0;font-family:Imprima, Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:48px;font-style:normal;font-weight:bold;line-height:58px;color:#7538D4">Happy to see you!</h1></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:40px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fafafa" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#fafafa;border-radius:10px" role="presentation">
                             <tr>
                              <td align="left" style="padding:20px;Margin:0"><h3 style="Margin:0;font-family:Imprima, Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:bold;line-height:34px;color:#2D3142">Welcome, <span style="color:#7538d4">${userName}</span></h3><p style="Margin:0;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;line-height:27px;letter-spacing:0;color:#2D3142;font-size:18px"><br>You're receiving this message because you recently signed up for an account.<br><br>We are happy to have you in our community!<br>Checkout our landing below 👇</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#efefef" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;border-radius:0 0 20px 20px;width:600px" role="none">
                     <tr>
                      <td align="left" style="Margin:0;padding-right:40px;padding-left:40px;padding-top:30px;padding-bottom:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://sila-co.com/" target="_blank" hidden>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://sila-co.com/" 
                        style="height:56px; v-text-anchor:middle; width:520px" arcsize="50%" stroke="f"  fillcolor="#7538d4">
            <w:anchorlock></w:anchorlock>
            <center style='color:#ffffff; font-family:Imprima, Arial, sans-serif; font-size:22px; font-weight:700; line-height:22px;  mso-text-raise:1px'>Our Landing Page</center>
          </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#7538d4;border-width:0px;display:block;border-radius:30px;width:auto;mso-hide:all"><a href="https://sila-co.com/" class="es-button msohide" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:22px;padding:15px 20px 15px 20px;display:block;background:#7538d4;border-radius:30px;font-family:Imprima, Arial, sans-serif;font-weight:bold;font-style:normal;line-height:26px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #7538d4;mso-hide:all;border-left-width:5px;border-right-width:5px;border-color:#7630f3">Our Landing Page</a></span><!--<![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:40px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;line-height:27px;letter-spacing:0;color:#2D3142;font-size:18px">Thanks,<br><br>Sila Marketing Agency</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#bcb8b1" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="Margin:0;padding-top:40px;padding-right:20px;padding-bottom:30px;padding-left:20px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_90e5e97b82a5066353993a871610856db81a05db39127c066c3153ec0949412b/images/silalogo.jpg" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" title="Logo" height="115" class="adapt-img" width="116"></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:20px;padding-top:10px;font-size:0">
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:5px"><a target="_blank" href="https://www.facebook.com/silaEEEEEE/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#2D3142;font-size:14px"><img src="https://feueuyy.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" title="Facebook" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                                  <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:5px"><a target="_blank" href="https://www.instagram.com/sila.agency.official/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#2D3142;font-size:14px"><img src="https://feueuyy.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Ig" title="Instagram" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://api.whatsapp.com/send?phone=213655611351&text=%D8%B9%D8%A7%D8%AF%D8%A9%D9%8B%20%D9%85%D8%A7%20%D9%8A%D8%B1%D8%AF%20%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%82%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A8%D8%B6%D8%B9%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." style="mso-line-height-rule:exactly;text-decoration:underline;color:#2D3142;font-size:14px"><img src="https://feueuyy.stripocdn.email/content/assets/img/messenger-icons/logo-black/whatsapp-logo-black.png" alt="Whatsapp" title="Whatsapp" height="24" width="24" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none"></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Imprima, Arial, sans-serif;line-height:21px;letter-spacing:0;color:#2D3142;font-size:14px">Copyright © 2024 Sila</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:40px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0"><h5 align="center" style="Margin:0;font-family:Imprima, Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#7538d4">This mail is sent by system, no need to reply, you can contact us in the Group if you want!</h5></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: 'You should receive an email!'
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
});

router.post('/sentTopUp', (req, res, next) => {
    const userEmail = req.body.userEmail;
    const paymentMethod = req.body.paymentMethod;
    const transferAmount = req.body.transferAmount;
    const transactionID = req.body.transactionID;

    const config = {
        service: 'gmail',
        auth: {
            user: 'Silamarketingg@gmail.com',
            pass: 'nqct ydan hhjv ohgz'
        }
    }

    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'Silamarketingg@gmail.com',
        to: userEmail,
        subject: 'Your Top up has been sent!',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New Template 2</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        .rollover:hover .rollover-first {
          max-height:0px!important;
          display:none!important;
          }
          .rollover:hover .rollover-second {
          max-height:none!important;
          display:block!important;
          }
          .rollover span {
          font-size:0px;
          }
          u + .body img ~ div div {
          display:none;
          }
          #outlook a {
          padding:0;
          }
          span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color:inherit;
          mso-style-priority:99;
          }
          a.es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-button-border:hover > a.es-button {
          color:#ffffff!important;
          }
        @media only screen and (max-width:600px) {.es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:46px!important; text-align:center } h2 { font-size:36px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:46px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:36px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:16px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#ffffff"></v:fill>
              </v:background>
            <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#ffffff" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#ffffff"><!--[if mso]><table style="width:520px" cellpadding="0"
                                    cellspacing="0"><tr><td style="width:156px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:156px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_026d7aab26d19e8837a5501541880423623f83b866bb85d34595aac29d8b4bf0/images/silalogo.jpg" alt="Logo" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="156" title="Logo" class="adapt-img" height="155"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:344px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:344px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" style="Margin:0;padding-right:40px;padding-bottom:20px;padding-left:40px;padding-top:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px;color:#7538D4">Top up initiated!</h1></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#333333" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#333333"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Payment method</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${paymentMethod}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Transfer Amount</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${transferAmount}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#333333" style="padding:0;Margin:0;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#333333"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Transaction ID</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${transactionID}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td class="es-info-area" align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-infoblock" style="padding:0;Margin:0"><h5 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#7538D4">This mail is sent by system, no need to reply, you can contact us in the Group if you want!</h5></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: 'You should receive an email!'
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
});

router.post('/acceptedTopUp', (req, res, next) => {
    const userEmail = req.body.userEmail;
    const paymentMethod = req.body.paymentMethod;
    const transferAmount = req.body.transferAmount;
    const transactionID = req.body.transactionID;
    const acceptedOn = req.body.acceptedOn;

    const config = {
        service: 'gmail',
        auth: {
            user: 'Silamarketingg@gmail.com',
            pass: 'nqct ydan hhjv ohgz'
        }
    }

    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'Silamarketingg@gmail.com',
        to: userEmail,
        subject: 'Your Top up has been Accepted!',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New Template 2</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        .rollover:hover .rollover-first {
          max-height:0px!important;
          display:none!important;
          }
          .rollover:hover .rollover-second {
          max-height:none!important;
          display:block!important;
          }
          .rollover span {
          font-size:0px;
          }
          u + .body img ~ div div {
          display:none;
          }
          #outlook a {
          padding:0;
          }
          span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color:inherit;
          mso-style-priority:99;
          }
          a.es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-button-border:hover > a.es-button {
          color:#ffffff!important;
          }
        @media only screen and (max-width:600px) {.es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:46px!important; text-align:center } h2 { font-size:36px!important; text-align:center } h3 { font-size:20px!important; text-align:center } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:46px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:36px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:16px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#ffffff"></v:fill>
              </v:background>
            <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#ffffff" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#ffffff"><!--[if mso]><table style="width:520px" cellpadding="0"
                                    cellspacing="0"><tr><td style="width:156px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:156px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_026d7aab26d19e8837a5501541880423623f83b866bb85d34595aac29d8b4bf0/images/silalogo.jpg" alt="Logo" style="display:block;font-size:18px;border:0;outline:none;text-decoration:none" width="156" title="Logo" class="adapt-img" height="155"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:344px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:344px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" style="Margin:0;padding-right:40px;padding-bottom:20px;padding-left:40px;padding-top:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h1 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px;color:#7538D4">Top up Accepted!</h1></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#333333" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#333333"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Payment method</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${paymentMethod}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Transfer Amount</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${transferAmount}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" bgcolor="#333333" style="padding:0;Margin:0;padding-right:40px;padding-bottom:20px;padding-left:40px;background-color:#333333"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Transaction ID</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${transactionID}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:250px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr>
                          <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:250px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><h3 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:normal;line-height:31px;color:#ffffff">Accepted on</h3></td>
                             </tr>
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#999999;font-size:18px">${acceptedOn}</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td class="es-info-area" align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
                     <tr>
                      <td class="es-m-p20r es-m-p20l" align="left" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-infoblock" style="padding:0;Margin:0"><h5 style="Margin:0;font-family:Oswald, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#7538D4">This mail is sent by system, no need to reply, you can contact us in the Group if you want!</h5></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: 'You should receive an email!'
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
});

router.post('/ad', (req, res, next) => {
    const userEmail = req.body.userEmail;

    const config = {
        service: 'gmail',
        auth: {
            user: 'Silamarketingg@gmail.com',
            pass: 'nqct ydan hhjv ohgz'
        }
    }

    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'Silamarketingg@gmail.com',
        to: userEmail,
        subject: 'Purchase received!',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New Template 4</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        .rollover:hover .rollover-first {
          max-height:0px!important;
          display:none!important;
          }
          .rollover:hover .rollover-second {
          max-height:none!important;
          display:block!important;
          }
          .rollover span {
          font-size:0px;
          }
          u + .body img ~ div div {
          display:none;
          }
          #outlook a {
          padding:0;
          }
          span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color:inherit;
          mso-style-priority:99;
          }
          a.es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-button-border:hover > a.es-button {
          color:#ffffff!important;
          }
        @media only screen and (max-width:600px) {.es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0r { padding-right:0px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:28px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } a.es-button, button.es-button { border-top-width:15px!important; border-bottom-width:15px!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F9F4FF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png" color="#F9F4FF" origin="0.5, 0" position="0.5, 0"></v:fill>
              </v:background>
            <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://feueuyy.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://feueuyy.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png);background-repeat:repeat;background-position:center top;background-color:#F9F4FF" role="none">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B1B1B;width:600px">
                     <tr>
                      <td align="left" bgcolor="#fff" style="Margin:0;padding-top:30px;padding-right:40px;padding-bottom:30px;padding-left:40px;background-color:#fff">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_9d7ac075cbbbb52ef7b9d5ffd0ce627475f7a27c524dce17731b66e19304cc01/images/silalogo.jpg" alt="" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none" class="adapt-img" height="253" width="255"></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;letter-spacing:0;color:#000;font-size:16px">Thank you for your purchase!</p></td>
                             </tr>
                           </table></td>
                         </tr>
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#4ca2f8;border-radius:20px;background-image:url(https://feueuyy.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/group_347_1.png);background-repeat:no-repeat;background-position:left center" background="https://feueuyy.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/group_347_1.png" role="presentation">
                             <tr>
                              <td align="left" class="es-m-p20r es-m-p20l" style="padding:45px;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;letter-spacing:0;color:#000;font-size:16px">Thank you for choosing Sila Agency.<br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;letter-spacing:0;color:#000;font-size:16px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;letter-spacing:0;color:#000;font-size:16px">We have noticed that you have purchased our License of Ad Accounts, and we are very honored and glad for your interest!</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" bgcolor="#fff" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:20px;background-color:#fff">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B1B1B;width:600px">
                     <tr>
                      <td align="left" background="https://feueuyy.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/20347363_v1072014converted_1_GkL.png" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:20px;background-image:url(https://feueuyy.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/20347363_v1072014converted_1_GkL.png);background-repeat:no-repeat;background-position:right top;background-color:#fff" bgcolor="#fff">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-m-p0l" style="padding:0;Margin:0;padding-left:40px;font-size:0px"><img src="https://feueuyy.stripocdn.email/content/guids/CABINET_9d7ac075cbbbb52ef7b9d5ffd0ce627475f7a27c524dce17731b66e19304cc01/images/silalogo.jpg" alt="Matthew Nichols" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none" title="Matthew Nichols" class="adapt-img" height="114" width="115"></td>
                             </tr>
                             <tr>
                              <td align="left" class="es-m-p0r es-m-p0l" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:20px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;letter-spacing:0;color:#000;font-size:16px">Thanks,<br><br>Sila Marketing Agency</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                 <tr>
                  <td align="center" bgcolor="transparent" style="padding:0;Margin:0">
                   <table class="es-content-body" cellpadding="0" cellspacing="0" bgcolor="#1B1B1B" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B1B1B;width:600px">
                     <tr>
                      <td align="left" bgcolor="#fff" style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:20px;background-color:#fff">
                       <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:520px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0"><h5 style="Margin:0;font-family:Poppins, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333">This mail is sent by system, no need to reply, you can contact us in the Group if you want!</h5></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                     <tr>
                      <td align="left" bgcolor="#7538D4" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;background-color:#7538D4">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0">
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://www.facebook.com/silaEEEEEE/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Facebook" src="https://feueuyy.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" height="24" width="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                                  <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://www.instagram.com/sila.agency.official/" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Instagram" src="https://feueuyy.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" height="24" width="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://api.whatsapp.com/send?phone=213655611351&text=%D8%B9%D8%A7%D8%AF%D8%A9%D9%8B%20%D9%85%D8%A7%20%D9%8A%D8%B1%D8%AF%20%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%82%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A8%D8%B6%D8%B9%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Whatsapp" src="https://feueuyy.stripocdn.email/content/assets/img/messenger-icons/circle-white/whatsapp-circle-white.png" alt="Whatsapp" height="24" width="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: 'You should receive an email!'
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
});

router.post('/mediaBuying', (req, res, next) => {
    const userEmail = req.body.userEmail;

    const config = {
        service: 'gmail',
        auth: {
            user: 'Silamarketingg@gmail.com',
            pass: 'nqct ydan hhjv ohgz'
        }
    }

    const transporter = nodemailer.createTransport(config);

    const message = {
        from: 'Silamarketingg@gmail.com',
        to: userEmail,
        subject: 'Welcome to media buying!',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" style="font-family:Nunito, Roboto, sans-serif">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New Template</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        #outlook a {
          padding:0;
        }
        .es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
        }
        .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
        }
        @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body style="width:100%;font-family:Nunito, Roboto, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FFFFFF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#fff" origin="0.5, 0" position="0.5, 0"></v:fill>
              </v:background>
            <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#2559CD" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#2559cd;width:600px" role="none">
                     <tr>
                      <td align="left" bgcolor="#fff" style="padding:20px;Margin:0;background-color:#ffffff"><!--[if mso]><table style="width:560px" cellpadding="0"
                                    cellspacing="0"><tr><td style="width:200px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:200px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e2238f0c5f09c676e78dd8a5f018baa086b48a4b884d62a35abe5b978ba1e189/images/silalogo.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="138" width="139"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:340px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:340px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;display:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#2559cd;background-repeat:no-repeat;width:600px;background-image:url(https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/mask_group_sno.png);background-position:center 70px" cellspacing="0" cellpadding="0" bgcolor="#fff" align="center" background="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/mask_group_sno.png" role="none">
                     <tr>
                      <td align="left" style="Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;padding-top:30px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff">Thank you for your purchase!</h1><h1 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#ffffff;display:none"><br></h1></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:27px;color:#ffffff;font-size:18px">We have noticed you purchased our media buying pack, thank you for your interest!</p></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/group.png" alt="Rocket" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;font-size:12px" height="250" title="Rocket" width="107"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/vector_Pm3.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600" height="50"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#fff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:60px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:40px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;font-size:0px"><img src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/group2.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40" height="40"></td>
                             </tr>
                           </table></td>
                          <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:134px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;width:114px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#123f88;font-size:14px">Pick your media!</p></td>
                             </tr>
                           </table></td>
                          <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:60px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:40px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/group1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40" height="40"></td>
                             </tr>
                           </table></td>
                          <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:133px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:113px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:27px;color:#123F88;font-size:18px">We edit it!</p></td>
                             </tr>
                           </table></td>
                          <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:40px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:40px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://eetfyhv.stripocdn.email/content/guids/CABINET_e138135061b85fdd0f9179dad6b78f41/images/group_fHk.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40" height="39"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:113px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:113px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:21px;color:#123f88;font-size:14px">More engagement!</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:30px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0">
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://www.facebook.com/silaEEEEEE/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#123F88;font-size:14px"><img title="Facebook" src="https://eetfyhv.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://www.instagram.com/sila.agency.official/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#123F88;font-size:14px"><img title="Instagram" src="https://eetfyhv.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt="Inst" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://api.whatsapp.com/send?phone=213655611351&text=%D8%B9%D8%A7%D8%AF%D8%A9%D9%8B%20%D9%85%D8%A7%20%D9%8A%D8%B1%D8%AF%20%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%82%20%D8%AE%D9%84%D8%A7%D9%84%20%D8%A8%D8%B6%D8%B9%20%D8%AF%D9%82%D8%A7%D8%A6%D9%82." style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#123F88;font-size:14px"><img title="Whatsapp" src="https://eetfyhv.stripocdn.email/content/assets/img/messenger-icons/circle-colored/whatsapp-circle-colored.png" alt="Whatsapp" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Nunito, Roboto, sans-serif;line-height:27px;color:#123F88;font-size:18px">This mail is sent by system, no need to reply, you can contact us in the Group&nbsp;if&nbsp;you&nbsp;want!</p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: 'You should receive an email!'
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
});

module.exports = router;