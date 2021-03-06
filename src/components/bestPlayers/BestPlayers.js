import React from 'react';
import ronaldo from '../../img/ronaldo3.png';
import messi from '../../img/messi.png';
import goldenBall from '../../img/golden-ball.png'
import cl from '../../img/cl.png'
import topScorer from '../../img/top-scorer.png'
import premierLeague from '../../img/premier4.png'
import spanish from '../../img/laliga2.png'
import italy from '../../img/serie a 1.png'
import europe from '../../img/europe.png'
import uefa from '../../img/uefa-best.png'
import statistic from '../../img/players.png'
import Fade from 'react-reveal/Fade';



export const BestPlayers = () => {
    return (
        <div className='best-players'>
            <p className='text-players'>In football conversations usually arises the discussion over who is better… if <span>Leo Messi</span> or <span>Cristiano Ronaldo</span>.</p>
            <p className='text-players'>Let's analyze the global figures that both players have produced throughout their career.</p>

            <div style={{ textAlign: 'center' }}>
                <img src={statistic} style={{ width: '300px' }} alt="best-payers" />
            </div>
            <div className='best-players-content'>

                {/******* Ronaldo Section **********/}
                <Fade left opposite>
                    <div className='ronaldo'>
                        <div>
                            <img src={ronaldo} alt="ronaldo" />
                        </div>
                        <div style={{ margin: 'auto 0', textAlign: 'start' }}>
                            <div className='ronaldo-info'>
                                <p>Golden Ball</p> &nbsp;
                            <img src={goldenBall} alt="" style={{ width: '30px' }} />
                                <span>x5</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>Champions League Winner</p> &nbsp;
                            <img src={cl} alt="" style={{ width: '30px' }} />
                                <span>x5</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>Top Scorer</p> &nbsp;
                            <img src={topScorer} alt="" style={{ width: '40px' }} />
                                <span>x17</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>English Champion</p> &nbsp;
                            <img src={premierLeague} alt="" style={{ width: '40px' }} />
                                <span>x3</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>Spanish Champion</p> &nbsp;
                            <img src={spanish} alt="" style={{ width: '40px' }} />
                                <span>x2</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>Italian Champion</p> &nbsp;
                            <img src={italy} alt="" style={{ width: '40px' }} />
                                <span>x1</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>European Champion</p> &nbsp;
                            <img src={europe} alt="" style={{ width: '40px' }} />
                                <span>x1</span>
                            </div>
                            <div className='ronaldo-info'>
                                <p>UEFA Best Player in Europe</p> &nbsp;
                            <img src={uefa} alt="" style={{ width: '40px' }} />
                                <span>x4</span>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/********** Messi Section **********/}
                <Fade right opposite>
                    <div className='messi'>
                        <div style={{ margin: 'auto 0', textAlign: 'end' }}>
                            <div className='messi-info'>
                                <span>6x</span>
                                <img src={goldenBall} alt="" style={{ width: '30px' }} />
                                <p>Golden Ball</p> &nbsp;
                            </div>
                            <div className='messi-info'>
                                <span>4x</span>
                                <img src={cl} alt="" style={{ width: '30px' }} />
                                <p>Champions League Winner</p> &nbsp;
                            </div>
                            <div className='messi-info'>
                                <span>16x</span>
                                <img src={topScorer} alt="" style={{ width: '40px' }} />
                                <p>Top Scorer</p> &nbsp;
                            </div>
                            <div className='messi-info'>
                                <span>10x</span>
                                <img src={spanish} alt="" style={{ width: '40px' }} />
                                <p>Spanish Champion</p> &nbsp;
                            </div>
                            <div className='messi-info'>
                                <span>2x</span>
                                <img src={uefa} alt="" style={{ width: '40px' }} />
                                <p>UEFA Best Player in Europe</p> &nbsp;
                            </div>
                        </div>

                        <div>
                            <img src={messi} alt="" />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
