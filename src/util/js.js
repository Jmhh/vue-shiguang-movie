

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "\u9009\u4e2d\u4e86 %(cnt)s \u4e2a\u4e2d\u7684 %(sel)s \u4e2a"
    ], 
    "6 a.m.": "\u4e0a\u53486\u70b9", 
    "6 p.m.": "\u4e0b\u53486\u70b9", 
    "A system exception": "\u7cfb\u7edf\u5f02\u5e38", 
    "April": "\u56db\u6708", 
    "August": "\u516b\u6708", 
    "Available %s": "\u53ef\u7528 %s", 
    "Cancel": "\u53d6\u6d88", 
    "Choose": "\u9009\u62e9", 
    "Choose a Date": "\u9009\u62e9\u4e00\u4e2a\u65e5\u671f", 
    "Choose a Time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4", 
    "Choose a time": "\u9009\u62e9\u4e00\u4e2a\u65f6\u95f4", 
    "Choose all": "\u5168\u9009", 
    "Chosen %s": "\u9009\u4e2d\u7684 %s", 
    "Click to choose all %s at once.": "\u70b9\u51fb\u9009\u62e9\u5168\u90e8%s\u3002", 
    "Click to remove all chosen %s at once.": "\u5220\u9664\u6240\u6709\u9009\u62e9\u7684%s\u3002", 
    "December": "\u5341\u4e8c\u6708", 
    "February": "\u4e8c\u6708", 
    "Filter": "\u8fc7\u6ee4", 
    "Hide": "\u9690\u85cf", 
    "January": "\u4e00\u6708", 
    "July": "\u4e03\u6708", 
    "June": "\u516d\u6708", 
    "Load data failure": "\u52a0\u8f7d\u6570\u636e\u5931\u8d25", 
    "March": "\u4e09\u6708", 
    "May": "\u4e94\u6708", 
    "Midnight": "\u5348\u591c", 
    "No available items": "\u65e0\u53ef\u7528\u7269\u54c1", 
    "No skins found, you may need to refresh.": "\u672a\u53d1\u73b0\u53ef\u7528\u76ae\u80a4\uff0c\u8bf7\u5237\u65b0\u5e93\u5b58", 
    "Noon": "\u6b63\u5348", 
    "Note: You are %s hour ahead of server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u8d85\u524d %s \u4e2a\u5c0f\u65f6\u3002"
    ], 
    "Note: You are %s hour behind server time.": [
      "\u6ce8\u610f\uff1a\u4f60\u6bd4\u670d\u52a1\u5668\u65f6\u95f4\u6ede\u540e %s \u4e2a\u5c0f\u65f6\u3002"
    ], 
    "November": "\u5341\u4e00\u6708", 
    "Now": "\u73b0\u5728", 
    "October": "\u5341\u6708", 
    "Please input trade links": "\u8bf7\u8f93\u5165\u62a5\u4ef7\u94fe\u63a5", 
    "Please select at least 1": "\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a", 
    "Processing": "\u5904\u7406\u4e2d", 
    "Remove": "\u5220\u9664", 
    "Remove all": "\u5220\u9664\u5168\u90e8", 
    "Robot has sent you a new trade offer, please accept it through steam.": "\u673a\u5668\u4eba\u5df2\u5411\u4f60\u53d1\u9001\u4e86\u6700\u65b0\u7684\u62a5\u4ef7\uff0c\u8bf7\u901a\u8fc7steam\u63a5\u53d7\u62a5\u4ef7", 
    "STEAM server internal error": "Steam\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef", 
    "STEAM server internal error, the price may send success": "\u4ef7\u683c\u83b7\u53d6\u5f02\u5e38", 
    "Save successfully!": "\u4fdd\u5b58\u6210\u529f", 
    "September": "\u4e5d\u6708", 
    "Show": "\u663e\u793a", 
    "Sorry! Trade up failed": "\u62b1\u6b49\uff01\u5408\u6210\u5931\u8d25", 
    "System is busy, please try again later": "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", 
    "System is busy, please try again later.": "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5", 
    "The browser version is too low, please update the latest version": "\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c", 
    "The robot is busy": "\u673a\u5668\u4eba\u7e41\u5fd9", 
    "The user refused to deal": "\u7528\u6237\u62d2\u7edd\u4ea4\u6613", 
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "\u8fd9\u662f\u53ef\u7528\u7684%s\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u9009\u62e9\u201d\u7bad\u5934\u3002", 
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "\u8fd9\u662f\u9009\u4e2d\u7684 %s \u7684\u5217\u8868\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u6846\u4e0b\u9762\u8fdb\u884c\u9009\u62e9\uff0c\u7136\u540e\u70b9\u51fb\u4e24\u9009\u6846\u4e4b\u95f4\u7684\u201c\u5220\u9664\u201d\u7bad\u5934\u8fdb\u884c\u5220\u9664\u3002", 
    "Today": "\u4eca\u5929", 
    "Tomorrow": "\u660e\u5929", 
    "Trade links format errors": "\u62a5\u4ef7\u94fe\u63a5\u683c\u5f0f\u9519\u8bef", 
    "Transaction link error, please modify the link": "\u4ea4\u6613\u94fe\u63a5\u9519\u8bef\uff0c\u8bf7\u4fee\u6539\u94fe\u63a5", 
    "Type into this box to filter down the list of available %s.": "\u5728\u6b64\u6846\u4e2d\u952e\u5165\u4ee5\u8fc7\u6ee4\u53ef\u7528\u7684%s\u5217\u8868", 
    "Unable to enter the URL": "\u65e0\u6cd5\u8f93\u5165\u7f51\u5740", 
    "Up to 60 characters": "\u6700\u591a60\u4e2a\u5b57\u7b26", 
    "Update successfully!": "\u66f4\u65b0\u6210\u529f", 
    "Yesterday": "\u6628\u5929", 
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "\u4f60\u5df2\u9009\u5219\u6267\u884c\u4e00\u4e2a\u52a8\u4f5c, \u4f46\u53ef\u7f16\u8f91\u680f\u4f4d\u6c92\u6709\u4efb\u4f55\u6539\u53d8. \u4f60\u5e94\u8be5\u5c1d\u8bd5 '\u53bb' \u6309\u94ae, \u800c\u4e0d\u662f '\u4fdd\u5b58' \u6309\u94ae.", 
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "\u4f60\u5df2\u9009\u5219\u6267\u884c\u4e00\u4e2a\u52a8\u4f5c, \u4f46\u6709\u4e00\u4e2a\u53ef\u7f16\u8f91\u680f\u4f4d\u7684\u53d8\u66f4\u5c1a\u672a\u4fdd\u5b58. \u8bf7\u70b9\u9009\u786e\u5b9a\u8fdb\u884c\u4fdd\u5b58. \u518d\u91cd\u65b0\u6267\u884c\u8be5\u52a8\u4f5c.", 
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "\u4f60\u5c1a\u672a\u4fdd\u5b58\u4e00\u4e2a\u53ef\u7f16\u8f91\u680f\u4f4d\u7684\u53d8\u66f4. \u5982\u679c\u4f60\u8fdb\u884c\u522b\u7684\u52a8\u4f5c, \u672a\u4fdd\u5b58\u7684\u53d8\u66f4\u5c06\u4f1a\u4e22\u5931.", 
    "exchange success": "\u5145\u503c\u6210\u529f", 
    "one letter Friday\u0004F": "F", 
    "one letter Monday\u0004M": "M", 
    "one letter Saturday\u0004S": "S", 
    "one letter Sunday\u0004S": "S", 
    "one letter Thursday\u0004T": "T", 
    "one letter Tuesday\u0004T": "T", 
    "one letter Wednesday\u0004W": "W", 
    "save success": "\u4fdd\u5b58\u6210\u529f"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M", 
      "%Y/%m/%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d", 
      "%Y-%m-%d", 
      "%Y\u5e74%n\u6708%j\u65e5"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5", 
    "NUMBER_GROUPING": "4", 
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "THOUSAND_SEPARATOR": "", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));
