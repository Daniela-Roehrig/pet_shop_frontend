import useFetch from '../../shared/hooks/useFetch';
import { Link } from 'react-router-dom';
import React from 'react';

import Spinner from '../../shared/components/Spinner/Spinner';
import backendInstance from '../../shared/api/backendInstance';
import Section from "../../shared/components/Section/Section";
import Loader from '../../shared/components/Loader/Loader';
import styles from './Categories.module.css';

const Categories = ({ fetchData }) => {
    const { data, loading, error } = useFetch({
        requestFunction: fetchData,
        initialData: [],
    });

    const categories = data;

    const baseURL = backendInstance.defaults.baseURL;
    return (
        <>
            {loading || error ?
                <Loader>
                    {loading && <Spinner />}
                    {error && <p>Error: {error}</p>}
                </Loader> : (
                    <Section>
                        <ul className={styles.list}>
                            {categories.map(({ id, title, image }) => (
                                <li key={id}>
                                    <Link to={`/categories/${id}`} className={styles.categoryItem}>
                                        <img className={styles.categoryImg} src={`${baseURL}/${image}`} alt={title} />
                                        <h4>{title}</h4>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Section>)}
        </>
    );
};

export default React.memo(Categories);