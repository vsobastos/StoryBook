import PropTypes from 'prop-types';

export default function Button({ href, className, target, label, disabled }) {
      /** Botão padrão para os blocos */

    return (
      /** Verifica se a URL é válida */
        <button 
            href={href}
            className={className}
            disabled = {disabled}
            target={target}
        >
            {label}
        </button>
    );
}

Button.defaultProps = {
  disabled: false,
};
