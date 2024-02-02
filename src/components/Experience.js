const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>Graduating from Indian Institute of Technology</i>, Sep 2020 - May 2024
                    <ul>
                        <li>8.7 CGPA</li>
                    </ul>
                </li>

                <li>
                    <i>Tarides</i> - <strong>OCaml Systems Engineer | Cambridge, UK</strong>, May 2023 - Sep 2023
                    <ul></ul>
                    <ul></ul>
                    <ul>
                <b><i>RTPMidi/AppleMidi Library and SDK</i></b>
                    <li>Designed RTP protocol to transfer MIDI data over Ethernet, by analyzing RFC-6295 by IETF; built C to OCaml bindings for libportmidi, and developed abstraction library over portmidi, with a backend-agnostic interface for Unix & mirageOS.</li>
                    <li>Designed a MIDI byte parsing algorithm for real-time user input and .midi file parsing; Reduced latency & improved data streaming and distribution efficiency using a Pub-sub model designed by utilizing UDP transport layer as the core.</li>
                    </ul>
                    <ul>
                <b><i>Geocaml R-Trees Project mentor</i></b>
                    <li>Mentored interns in building the R-tree library (Ocaml), enhancing spatial data indexing & processing queries efficiently.</li>
                    </ul>
                </li>
                <li>
                    <i>Mainflux Labs (now Abstract Machines)</i> - <strong>GoLang Developer | Paris, France</strong>, Jan 2022 - Jun 2023
                    <ul>
                        <li>Contributed to smart contract development on client's platform</li>
                        <li>Peer reviewed &amp; Audited Solidity code</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;