import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import { View } from "react-native";
import { addAccounts,fetchBanks } from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const banks = useSelector((state) => state.accounts.banks);

  const dispatch = useDispatch();

 

  const [cbu, setCbu] = useState("");
  const handleCbu = (cbu) => {
    setCbu(cbu);
  };

  const [accountNumber, setAccountNumber] = useState("");
  const handleAccountNumber = (accountNumber) => {
    setAccountNumber(accountNumber);
  };

  useEffect(() => {
    //dispatch(fetchUserAccounts("5f0f14c1830a243382d6c6aa"))
     dispatch(fetchBanks())

      // .then(() => {
      //   setLoader(true);
      // });
  }, []);

  const handleSubmit = () => {
    dispatch(addAccounts(cbu, accountNumber, user._id));
    
    // dispatch(addAccounts(name, cbu, accountNumber, "5f0f14c1830a243382d6c6aa"));
  };

  return (
    <View>
      <AddAccounts
        banks={banks}
        handleCbu={handleCbu}
        handleAccountNumber={handleAccountNumber}
        handleSubmit={handleSubmit}
        navigation={navigation}
        name={name}
        cbu={cbu}
        accountNumber={accountNumber}
      />
    </View>
  );
};
