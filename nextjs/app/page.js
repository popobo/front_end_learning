import LikeButton from "./like-button";

function createTitle(title) {
    if (title) {
        return title + "TEST";
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    console.log(title);
    return <h1>{`Cool ${title} ${createTitle(title)}`}</h1>;
}

export default function HomePage() {
    const names = ['aaaaaAda Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="react" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}
