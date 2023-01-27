import './RequestForm.css'
import { createElement } from 'react';

function RequestForm ({formData, form, stage, onChange, handleSubmit, nextStage, previousStage}) {
  const inputs = form.stages[stage]

  return (
    <form>
      <div className="form-rows">
        {inputs.map((input, index) => {
          return (
            <div className="form-row" key={index}>
              <label htmlFor={input.attributes.id}>{input.label}</label>
              {createElement(
                input.tagName,
                {
                  ...input.attributes,
                  onChange: onChange,
                  value: formData[input.attributes.name]
                }
              )}
            </div>
          )
        })}
      </div>

      <footer>
        <nav className="form-footer-nav">
          {stage === 0 ? <button hidden></button> : <button onClick={previousStage}>back</button>}
          {stage < form.stages.length -1 ? <button onClick={nextStage}>next</button> : <button onClick={handleSubmit}>submit</button>}
        </nav>
      </footer>
    </form>
  )
}

export default RequestForm
