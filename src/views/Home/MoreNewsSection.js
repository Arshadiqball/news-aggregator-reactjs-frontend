import React from "react"
import NullImage from "../../views/Images/nullImage.png"

function MoreNewsSection(props) {
    const { allArticles } = props

    return (
        (allArticles
            .filter(article => article.category === 'technology')
            .length > 0 &&
            <div className="mvp-main-blog-in">
                <div className="mvp-main-blog-body left relative">
                    <ul className="mvp-blog-story-list left relative infinite-content">
                        {allArticles && (
                            allArticles
                                .filter(article => article.category === 'technology')
                                .slice(0, 5).map((element, index) => (
                                    <li key={index} className="mvp-blog-story-wrap left relative infinite-post">
                                        <a href={element.url}
                                            rel="bookmark">
                                            <div className="mvp-blog-story-out relative">
                                                <div className="mvp-blog-story-img left relative">
                                                    <img width="1000" height="600"
                                                        src={element.image ?? NullImage}
                                                        className="mvp-big-img wp-post-image" alt=""
                                                        decoding="async" loading="lazy"
                                                        sizes="(max-width: 1000px) 100vw, 1000px" /> <img
                                                        width="400" height="240"
                                                        src={element.image ?? NullImage}
                                                        className="mvp-reg-img wp-post-image" alt=""
                                                        decoding="async" loading="lazy"
                                                        sizes="(max-width: 400px) 100vw, 400px" /> <img
                                                        width="80" height="80"
                                                        src={element.image ?? NullImage}
                                                        className="mvp-mob-img wp-post-image" alt=""
                                                        decoding="async" loading="lazy"
                                                        sizes="(max-width: 80px) 100vw, 80px" />
                                                </div>
                                                <div className="mvp-blog-story-in">
                                                    <div className="mvp-blog-story-text left relative">
                                                        <div className="mvp-cat-date-wrap left relative">
                                                            <span
                                                                className="mvp-cd-cat left relative">{element.category}</span><span
                                                                    className="mvp-cd-date left relative">{element.publish_at_human}</span>
                                                        </div>
                                                        <h2>{element.title.length > 60 ? `${element.title.substring(0, 60)}` : element.title}</h2>
                                                        <p>{element.description.length > 100 ? `${element.description.substring(0, 100)}...` : element.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))
                        )}

                    </ul>
                    <div className="mvp-inf-more-wrap left relative">
                        <a href="categories/technology" className="mvp-inf-more-but"
                            style={{ display: "inline-block" }}>More Technology Posts</a>
                    </div>
                </div>
            </div>
        )
    )
}

export default MoreNewsSection
