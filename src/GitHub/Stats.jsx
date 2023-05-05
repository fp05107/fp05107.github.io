import React from "react";
import "./Stats.css";

export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
            <div>
                <div className="statsContainer">
                    <div>
                        <a href="https://github.com/fp05107">
                            <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=fp05107&theme=neon-dark" alt="fp05107 Github Stats"/>
                        </a>
                    </div>
                </div>

                <div className="stats-3">
                    <p align="center">
                        <a href="https://github.com/fp05107/github-readme-stats">
                            <img alt="Subham sahoo Top Languages" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=fp05107&langs_count=8&count_private=true&layout=compact&theme=great-gatsby&hide_border=true&bg_color=0D1117" />
                        </a>
                    </p>
                </div>

                <div className="stats-2">
                    <p align="center">
                        <a href="https://github.com/fp05107/github-readme-stats">
                            <img alt="subham sahoo Github Stats"
                                src="https://github-readme-stats-sigma-five.vercel.app/api?username=fp05107&show_icons=true&locale=en&theme=highcontrast&hide_border=true&bg_color=0D1117"
                            />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}