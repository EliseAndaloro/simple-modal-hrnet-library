# simple-component-library : A library of React components created using `create-react-app`.

# React Modal HRNet Component

A simple and reusable Modal component for React

## Prerequisites

- Un éditeur de texte comme [VsCode](https://code.visualstudio.com/download)
- [Node.js = v.18.12.1](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install simple-modal-hrnet-library
```

## Example
In this example, the modal opens when the form is submitted and the new employee is created. Then when you click on the close button, the form is resetted.

```js
import React, { useState } from "react";
import Modal  from "simple-modal-hrnet-library";


const Example = () => {
  const [modal, setModal] = useState(false);

  const saveEmployee = async (e) => {
        e.preventDefault();
        const isError = validateForm();
        checkForm();
        if (!isError) {
            const submit = dispatch(checkValidForm());
            if (submit) {
                dispatch(submitForm(employee));
                setModal(true);
            }
        }
    };

    const resetForm = () => {
        document.getElementById("formulaire").reset();
        setModal(false);
        setFirstName("");
        setLastName("");
        setCity("");
        setBirthDate(new Date());
        setStartDate(new Date());
        setDepartment("");
        setState("");
    }

  return (
    <div className="button-save">
        <button className="button_btn" onClick={saveEmployee}>
            {" "}
            Save{" "}
        </button>
        {modal && (
            <Modal
                message={"employee created"}
                closeModal={resetForm}
            />
        )}
    </div>                
  );
};
```

## Configuration

The most basic use of the Modal can be described with:

```js
<Modal message={"message to write in the modal"} closeModal={functionCalledWhenClickingCloseButton} />
```
