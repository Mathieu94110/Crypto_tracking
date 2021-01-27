import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/Store/Store';
import Alert from '../../components/SearchCrypto/Alert';
import SearchedCrypto from '../../components/SearchCrypto/SearchedCrypto';
import SearchForm from '../../components/SearchCrypto/SearchForm';
import { setAlert } from '../../redux/Actions/alertActions';


const Search: FC = () => {
  const dispatch = useDispatch();
  const SearchCryptoData = useSelector((state: RootStore) => state.favorites.data);
  const loading = useSelector((state: RootStore) => state.favorites.loading);
  const alertMsg = useSelector((state: RootStore) => state.alert.message);
//console.log(SearchCryptoData)
    return (
      
    <div style={{textAlign:"center"}}>
            <SearchForm title="Entrer un nom de crypto"/>
      {loading ? <h2 style={{margin:'auto'}}>Loading...</h2> : SearchCryptoData && <SearchedCrypto data={SearchCryptoData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}

    </div>
  );
}

export default Search;