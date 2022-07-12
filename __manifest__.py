# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Example owl',
    'version': '1.0',
    'category': 'Custom module',
    'summary': 'IDK',
    'depends': [
        'sale',
        'sale_management',
    ],

    'data': [
        # 'assets.xml',
        'views/sale_order_view.xml'
    ],

    'assets': {
        'web.assets_backend': [
            'fv_test_owl/static/src/js/components/PartnerOrderSummary.js',
            'fv_test_owl/static/src/js/components/CallsRealizedButton.js',
        ],

       'web.assets_qweb':[
            'fv_test_owl/static/src/xml/PartnerOrderSummary.xml',
            'fv_test_owl/static/src/xml/CallsRealizedButton.xml',
    ],
        
    },
   
    
   
  
    
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
