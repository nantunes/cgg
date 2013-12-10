/*!
* Copyright 2002 - 2013 Webdetails, a Pentaho company.  All rights reserved.
*
* This software was developed by Webdetails and is provided under the terms
* of the Mozilla Public License, Version 2.0, or any later version. You may not use
* this file except in compliance with the license. If you need a copy of the license,
* please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
*
* Software distributed under the Mozilla Public License is distributed on an "AS IS"
* basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
* the license for the specific language governing your rights and limitations.
*/

// ATTENTION: this file is now **deprecated** and intended to be used only
// by Analyzer <= 4.8.2 print scripts.
//
// Use cdf-env.js instead!

lib('cdf-env.js');

// <= ~2013-09-12 Legacy scripts; did not execute pre/postExec and received data directly.
var renderCccFromComponent = function (component, data) {
    cgg.init(component);

    var CggLegacy1CccComponent = require('cdf/components/CggLegacy1CccComponent');

    Dashboards.bindControl(component, CggLegacy1CccComponent);

    component.setPreFetchedData(data);

    component.update();
};
