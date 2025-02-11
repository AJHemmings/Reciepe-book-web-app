// header - h1 h2 logo emojis
import logo from "../../assets/240_F_126821319_Pjl3djIEmaJUtpWvaMU6fsw0z826HPCW.jpg";

function Header() {
  return (
    <div id="center " className="header">
      <header className="center">
        <img src={logo} alt="Logo" />
      </header>
      <h1>Student Recipes</h1>
      <p>Easy, Quick & Budget-Friendly Meals</p>
    </div>
  );
}

export default Header;
