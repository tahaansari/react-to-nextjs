import LikeButton from "./like-button";
function Header() {
  return <h1>Header Component</h1>;
}
function Footer() {
  return <h1>Footer Component</h1>;
}
function Body({ title }) {
  return (
    <h1>
      Body Component of {title} <LikeButton />
    </h1>
  );
}

export default function Homepage() {
  return (
    <>
      <Header />
      <Body title="Homepage" />
      <Body title="About Us" />
      <Body title="Contact Us" />
      <Footer />
    </>
  );
}

function App() {
  return <Homepage />;
}
