import React, { useState, useEffect, useCallback } from "react";

const UserItem = React.memo(
  ({ name, email, subscription_mail, renderDelimmitter }) => {
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
        {renderDelimmitter && renderDelimmitter()}
        <p>Subscrbibed to mail: {subscription_mail ? "Yes" : "No"}</p>
      </div>
    );
  }
);

// HOC DEMO

const isAuthenticated = () => {
  return localStorage.getItem("use_id");
};

const WithAuth = (Component) => {
  return (props) => {
    if (isAuthenticated()) {
      return <p>Not Authenticated</p>;
    }
    return <Component {...props} />;
  };
};

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Content</h1>
      <p>This content is only visible to authenticated users.</p>
    </div>
  );
};

const AuthProtectedComponent = WithAuth(ProtectedComponent);

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <AuthProtectedComponent />
    </div>
  );
};

// HOC DEMO END

function MemoStudy() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    subscription_mail: "",
  });
  const [userList, setUserList] = useState([]);

  const onSubmitHandler = useCallback(
    (e) => {
      //   e.preventDefault();
      setUserList((prev) => [...prev, inputData]);
      setInputData({ name: "", email: "" });
    },
    [inputData]
  );

  const onChangeHandler = (e) => {
    console.log(e.target.checked, e.target.value);
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value || e.target.checked,
    }));
  };
  return (
    <div>
      <h3>Form</h3>
      <form>
        <label>
          Name:
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            value={inputData.name}
          />
        </label>
        <label>
          Email:
          <input
            onChange={onChangeHandler}
            type="text"
            name="email"
            value={inputData.email}
          />
        </label>
        <label>
          consent to subscribe to email:
          <input
            onChange={onChangeHandler}
            type="checkbox"
            name="subscription_mail"
            value={inputData.subscription_mail}
          />
        </label>
        <button type="button" onClick={onSubmitHandler}>
          Submit
        </button>
      </form>
      <h3>User List</h3>
      {userList.map((user, index) => (
        <UserItem
          renderDelimmitter={() => <>{"|"}</>}
          key={index}
          name={user.name}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default MemoStudy;
