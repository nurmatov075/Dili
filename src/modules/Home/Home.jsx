import logo from '../../assets/icons/logo.svg'
export function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="wrraper">
            <img src={logo} alt="" />
            <div className="left_right">
              <div className="left">
                <ul>
                  <li>Доска объявлений</li>
                  <li>Сервисный центр</li>
                  <li>Интернет-магазин Dily.ru</li>
                  <li>Скупка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
