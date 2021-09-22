import Link from 'next/link';

const Continent = ({continent}) => {
    const {code, name} = continent;
    return (<Link href={`/continent?code=${code}`} >{name}</Link>)
}

export default Continent;