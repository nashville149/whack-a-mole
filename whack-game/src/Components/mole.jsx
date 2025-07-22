const Mole = ({visible , onwhack}) => {
    return (
        <div className="mole-hole"
         onClick={visible? onwhack : null}>
            {visible && (<img src="/mole.png" alt="mole" classname="mole"/>)}
        </div>
        );
};

export default Mole;
