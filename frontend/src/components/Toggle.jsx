import "../../src/styles/css/Toggle.css";

export const Toggle = ({handleChange, isChecked}) => {
    return(
        <div class="toggle-container">
            <input
                type="checkbox"
                id="check"
                class = "toggle"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    );
};