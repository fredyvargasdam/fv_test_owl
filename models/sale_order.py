
from odoo import fields, models, api, _


class SaleOrder (models.Model):
    _inherit = 'sale.order'

    calls_realized = fields.Integer(string="Llamadas realizadas al cliente") 

