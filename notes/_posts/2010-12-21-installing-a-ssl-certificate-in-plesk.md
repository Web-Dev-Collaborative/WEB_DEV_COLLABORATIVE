---
id: 893
title: Installing a SSL Certificate in Plesk
date: 2010-12-21T14:05:28+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=893
permalink: /2010/12/21/installing-a-ssl-certificate-in-plesk/
categories:
  - plesk
tags:
  - install
  - manage
  - ssl
---
Add a SSL Certificate to a website using Plesk it is simple: it is important to know Plesk version because it is different among differente releases.  
**Plesk 9**

  1. we first login to Plesk and navigate to the domain you wish to install the Certificate on to
  2. enter into the configuration of the target domain
  3. click on SSL Certificates
  4. click on Add SSL Certificate
  5. if you already have a SSL Certificate then you can skip this step and go to step 8. Any details: 
      1. Name the certificate. This can be named anything that you choose. You could use a descriptive name including a timestamp like YYYYMMDDRR format where RR is the revision number (00 in this case as there are no revisions for the same day)
      2. Make any needed adjustments to the SSL Request. This information will be embedded in the SSL Certificate and should be similar to the domain registration information
      3. The email address should match one of the email addresses in the domain whois information provided by your domain registrar
      4. Falsified information may be rejected by your SSL Certificate Authority.
  6. now enter back into the Certificate configuration
  7. you can now review the CSR and Private Key. Save the Private Key in a safe location. Should anything occur with your server that the certificate must be re-entered you MUST have at least the Certificate and Private Key. Take the CSR and submit it to the Certificate Authority of your choice
  8. once you have received the Certificate from your Certificate Authority you can paste it into the Certificate text area. If your Certificate Authority requires, you may need to paste their own Certificate into the CA certificate text area (often called a CA Bundle)
  9. if the Private Key does not match the Certificate then you will see a page similar to this. You MUST have a matching Private Key and Certificate in order to use a Certificate
 10. once installed you will see CSR, Private Key and Certificate. These three all match up and are ready to be used
 11. now you will navigate back in to the Web Hosting Settings from the Domains configuration
 12. select the corresponding Certificate and click OK at the bottom

**Plesk 9.5**  
Previous steps do not work. Certificate must be adding into Global Configurations and not into single domain configuration.

  1. we first login to Plesk and enter into the Global Configuration
  2. click on SSL Certificates and follow steps (about Plesk 9) from 4 to 10
  3. now you will navigate back in to the IP addresses
  4. you need exclusive IP addresses for domains with SSL certificates. Enter into IP address about your website to apply the SSL Certificate
  5. select SSL Certificate (choose name about certificate newly created)
  6. select domain and save
  7. follow last steps (about Plesk 9) 11 and 12

The new certificate is now being used for the domain. If you have updated the certificate then you may need to completely close out of your browser before the new certificate is used.

Reference: [modularmerchant.com](http://forums.modularmerchant.com/viewtopic/514/Installing-a-SSL-Certificate-in-Plesk), [parallels.com](http://forum.parallels.com/showthread.php?t=84030)

