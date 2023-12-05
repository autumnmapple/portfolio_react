const Contacts = () => {
    return ( 
       <div>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Novosibirsk, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram/WhatsApp</h2>
                            <p><a href="tel:+79130077931">+7 (913) 007-79-31</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:lepeshkinaka@mer.ci.nsu.ru">lepeshkinaka@mer.ci.nsu.ru</a></p>
                        </li>
                    </ul>
                </div>
            </main>
       </div> 
    );
}
 
export default Contacts;