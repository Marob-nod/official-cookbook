import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'

const TextArea = ({ type, name, placeholder, autogrow }) => {

    const dispatch = useDispatch()
    const value = useSelector(state => state.recipe[name])

    const handlechange = (event) => {
        dispatch({
            type: 'CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS',
            fieldName: name,
            value: event.target.value
        })
    }
    return (
        <div className="createrecipe_container_form_content_item">
            <textarea
                type={type}
                className='form-input'
                placeholder={placeholder}
                name={name}
                value="Jujubes sugar plum cupcake marshmallow powder carrot cake shortbread shortbread wafer. Bear claw lemon drops brownie jujubes gummi bears danish gummi bears apple pie. Chocolate cake cake candy pastry cupcake jujubes jujubes bonbon cake. Tart cookie icing fruitcake jelly beans. Cake gummies jelly topping tiramisu jelly-o powder soufflé. Dessert ice cream macaroon sweet roll croissant. Bear claw pastry dragée toffee pie marshmallow topping chocolate bar sesame snaps. Oat cake muffin jelly powder halvah.

                Biscuit apple pie wafer cookie macaroon. Caramels marzipan sesame snaps marshmallow sweet roll cheesecake chocolate bar candy canes. Gummies tiramisu caramels jelly-o sugar plum wafer. Fruitcake ice cream lollipop danish cupcake tart chupa chups shortbread. Candy canes biscuit sesame snaps apple pie jelly beans. Pastry cheesecake croissant tiramisu topping gummi bears bonbon macaroon tiramisu. Jelly-o soufflé carrot cake pie cotton candy gummies brownie. Pastry macaroon cake sugar plum dragée. Carrot cake brownie oat cake wafer candy canes macaroon cupcake donut shortbread. Marshmallow bear claw apple pie pie pie gummi bears pastry.
                
                Oat cake chupa chups ice cream chupa chups gingerbread gummies. Powder sesame snaps jujubes lollipop fruitcake candy canes oat cake chupa chups gummi bears. Jelly-o cotton candy brownie dessert jujubes chocolate bar jelly-o. Wafer topping jelly beans dragée powder cake croissant. Biscuit cake jelly-o cupcake cotton candy marzipan jelly. Muffin sugar plum gummi bears bear claw soufflé. Sweet cupcake donut jelly-o candy sugar plum candy canes sesame snaps. Apple pie muffin caramels croissant cake dessert. Sweet cheesecake fruitcake danish pie tiramisu dragée brownie pie.
                
                Caramels icing chupa chups tootsie roll jelly cotton candy. Tart ice cream donut soufflé icing. Pudding marzipan cake ice cream jujubes powder. Powder muffin caramels jelly-o tiramisu. Liquorice icing croissant chocolate lollipop sweet cotton candy icing. Sweet sweet roll cheesecake macaroon wafer pie cheesecake sweet roll gingerbread. Apple pie marshmallow liquorice tootsie roll chupa chups. Cookie cupcake shortbread oat cake tiramisu. Cupcake bonbon gingerbread liquorice oat cake gummi bears sweet gingerbread tiramisu.
                
                Halvah cookie lemon drops gummies carrot cake. Chocolate toffee toffee sweet roll carrot cake sweet toffee oat cake. Powder candy chocolate bar sugar plum dragée muffin. Candy canes danish chocolate bar lollipop dragée sugar plum carrot cake bear claw. Icing fruitcake apple pie pastry powder caramels fruitcake. Tiramisu lemon drops cupcake ice cream jelly."
                onChange={handlechange} />
            <label for={name}>{name}</label>
        </div>
    )
}

export default TextArea;