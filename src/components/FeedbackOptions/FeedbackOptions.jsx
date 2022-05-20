import PropTypes from 'prop-types'

import style from './feedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    const element = options.map((option, index)=> {
        return <li className={style.element} key={index}>
            <button
            type="button"
            className={style.button}
            onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </button>
        </li>
    })
    return (
        <ul className={style.list}>
            {element}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;