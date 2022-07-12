odoo.define('fv_test_owl.CallsRealizedButton', function(require){
    const {Component} = owl;
    const {useState} = owl.hooks;
    const {ComponentWrapper} = require('web.OwlCompatibility');
    const FormRenderer = require('web.FormRenderer');
    const {xml} = owl.tags;
    var rpc = require('web.rpc')

    class CallsRealizedButton extends Component{
        // sale_order = useState({});
        // constructor(self, sale_order){
        //     super();
        //     this.sale_order = sale_order;
        // };
        
        
        // sale_order = useState({});
        
        setup() {
            this.calls_realized = useState({value: this.props.calls_realized });

        }

        async increment(){
            this.calls_realized.value++;
            await rpc.query({
                model: "sale.order",
                method: "write",
                args:[this.props.id, {'calls_realized': this.calls_realized.value}],
            })
        };
    
        // increment() {
        //     this.state.value++;
        // }

    };
    /**
     * Registrar plantilla
     */
    Object.assign(CallsRealizedButton,{
        template : 'fv_test_owl.CallsRealizedButton'
    });

    FormRenderer.include({
        async _renderView(){
            await this._super(...arguments);
            for (const element of this.el.querySelectorAll(".o_custom_fv_buttom")){
                this._rpc({
                    model: "sale.order",
                    method: "read",
                    args:[[this.state.data.id]]
                }).then(data =>{
                    (new ComponentWrapper(
                        this,
                        CallsRealizedButton,
                        useState(data[0])
                    )).mount(element);
                })
            }
        }
    })
    

});