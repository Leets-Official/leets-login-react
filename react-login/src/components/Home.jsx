import './Home.css'

const Home =()=>{

    const date = new Date();
    return (
        <div className="Home">

            <h3>✨로그인 성공✨</h3>

            <div className='name'>000님</div>
            <div className='part'>part</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <p>출석 하시겠습니까?</p>
            <button>출석하기</button>

        </div>
    )
}

export default Home;