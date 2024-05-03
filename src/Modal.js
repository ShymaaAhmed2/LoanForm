import "./FormStyles.css";
export default function Modal({ IsShown, ErrorMessage = null }) {
  if (IsShown) {
    return (
      <div id="modal" className="flex">
        <div id="model-content">
          <h1 style={{ color: ErrorMessage ? "red" : "green" }}>
            {ErrorMessage != null
              ? ErrorMessage
              : "The Form Has Been Submited Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
