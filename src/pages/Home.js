import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 나타나는 페이지</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/user1">user1 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/user2">user2 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/user3">user3 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;