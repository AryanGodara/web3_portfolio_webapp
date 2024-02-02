// Import Assets
import ghovardhan from '../assets/ghovardhan.png';
import zetachain from '../assets/zetachain.png';
import ds from '../assets/ds-coin.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>ERC4626 Vaults & Aave V3 SDK</h3>
                    <img src={ghovardhan} alt="ERC4626 Vault" />
                    <p>
                    • Built a ERC20 token selection model using LSTM and Monte Carlo Simulations to select top 10 performing coins from 40 based on 5-day forward returns. Implemented ERC4626 vaults, self-deployed UniswapV2 router with liquidity pools.
                    </p><p>
                    • Implemented an ERC 4337 account abstraction wallet with ERC2612 & ERC712, for efficient and gasless transactions.
                    </p><p>
                    • Created a marketplace with an intra-day trading vault to promote Aave’s credit delegation protocol. Established a robust platform for lenders and borrowers, featuring efficient and secure credit delegation management within our ecosystem.
                    </p>

                    <a href="https://learnhost.co.in/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/LFGHO/gho" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Bitcoin Oridnal Omnichain NFT</h3>
                    <img src={zetachain} alt="Zetachain Logo" />
                    <p>
                    • Users can inscribe data permanently, backed by Bitcoin and create an ERC721 compatible NFT to be used in the all the EVM chains ( connected by zetachain ) This means you can mirror all the existing defi primitives with Bitcoin, starting out with NFTs with our protocol.
                    </p><p>
                    • It was earlier impossible to create Bitcoin-backed assets and there weren't any bitcoin native defi protocols available. This presented a serious problem to wider use-cases the digital gold can provide. With our protocol, we allow users to create bitcoin backed NFTs and use them in a composable manner.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DS Coin: Cryptocurrency from scratch in Java</h3>
                    <img src={ds} alt="Aave Landing Page" />
                    <p>
                        • Built a Cryptocurrency DS Coin using several Authenticated Data Structures like Stacks, Linked Lists, and Merkle Trees.
                    </p><p>
                        • Developed secure digital payment system independent of 3rd party banks assuring transaction legitimacy & traceability.
                    </p><p>
                        • Implemented cryptography techniques like Digital signatures, Digital certificates & Collision resistant functions (CRF).
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;