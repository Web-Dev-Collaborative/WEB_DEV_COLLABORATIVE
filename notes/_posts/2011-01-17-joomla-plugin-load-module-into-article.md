---
id: 926
title: 'Joomla &#8211; Plugin load module into article'
date: 2011-01-17T09:43:54+00:00
##author: biliards
layout: post
guid: http://ittips.pandle.net/?p=926
permalink: /2011/01/17/joomla-plugin-load-module-into-article/
categories:
  - joomla
tags:
  - configure
  - module
  - web based
---
**Load Module plugin**  
You will usually want to associate modules with articles in some way. The modules are allocated to module positions and the module positions appear somewhere on the Web page as determined by the template. However, it is sometimes useful to have a module actually embedded within the article.

To insert a module inside an article, use the {loadposition xx} command, as follows:

1. Create a module and set its position to any value that doesn&#8217;t conflict with an existing template position. You can type in the position value instead of selecting it from the drop-down list. For example, use the position myposition.  
2. Assign the module to the Menu Items that contain the articles that you want the module to show in. You can also just assign the module to all Menu Items.  
3. Edit the articles where you want this module to appear and insert the text  
> {loadposition myposition}

in the article at the place where you want the module.

Note that this only works when the Content &#8211; Load Module plugin is enabled. If this plugin is disabled, the text `{loadposition myposition}` shows unchanged in the article.

**Load module into article**  
This plugin loads any module into an article.  
Syntax in editor:  
> {module [27]}

where 27 is the modules id.

**Modules Anywhere**  
With Modules Anywhere you can include a single module or complete module positions anywhere in your site, including inside 3rd party components and even inside other modules.

Why use Modules Anywhere, and not the `{loadposition}` plugin?  
* It works anywhere, not only in articles. It even works in modules!  
* You can load a single module, not only complete module positions.  
* You can control the html display style from within the tag, not only one global setting.  
* You have some security setting, so you can disable this feature for lower user types.  
* It comes with a very easy to use editor button.

You can set Modules Anywhere to also handle the `{loadposition}` tags. In that case, you can safely disable the `{loadposition}` plugin all together.

Modules Anywhere does not show unpublished Modules by default. If you do want it to, you can change that behavior through the plugin parameters.

**Load module into zoo**  
To load module into zoo content, you could use _Modules Anywhere_ or modify template about zoo.  
If you want load module into product catalog, then you could implement ProductApplication class as
> JPATH\_BASE.DS.&#8217;plugins&#8217;.DS.&#8217;content&#8217;.DS.&#8217;loadmodule.php&#8217;

module (with function that return text modified) and use it into template file

> JPATH\_BASE.DS.&#8217;media/zoo/applications/product/templates/default/renderer/item/full.php&#8217;

with  
> ProductApplication::your_function($html_content)

where **your_function** is public function that you implemented (as plgContentLoadModule about loadmodule.php) and **$html_content** is variable that contain your `{loadposition xx}`.

Reference: [docs.joomla.org](http://docs.joomla.org/How_do_you_put_a_module_inside_an_article%3F), [Load module into article](http://extensions.joomla.org/extensions/core-enhancements/embed-a-include/6958), [Modules Anywhere](http://extensions.joomla.org/extensions/core-enhancements/embed-a-include/6402)
