import './css/style.css'
import ErrorCard from './ErrorCard'

const Error = () => {
    return (
        <section className="container mt-5 flex justify-center flex-wrap mx-auto px-6">
            <ErrorCard
                title={"! [rejected] branch -> branch (non-fast-forward)"}
                error={"Some quick example text to build on the card title and make up the bulk of the card's content.error: failed to push some refs to 'git@github.com:/reponame.git'<br /\> To prevent you from losing history, non-fast-forward updates were rejected Merge the remote changes (e.g. 'git pull') before pushing again.  See the 'Note about fast-forwards' section of 'git push --help' for details."}
            />
            <ErrorCard
                title={"! [rejected] branch -> branch (non-fast-forward)"}
                error={"Some quick example text to build on the card title and make up the bulk of the card's content.error: failed to push some refs to 'git@github.com:/reponame.git'<br /\> To prevent you from losing history, non-fast-forward updates were rejected Merge the remote changes (e.g. 'git pull') before pushing again.  See the 'Note about fast-forwards' section of 'git push --help' for details."}
            />
            <ErrorCard
                title={"! [rejected] branch -> branch (non-fast-forward)"}
                error={"Some quick example text to build on the card title and make up the bulk of the card's content.error: failed to push some refs to 'git@github.com:/reponame.git'<br /\> To prevent you from losing history, non-fast-forward updates were rejected Merge the remote changes (e.g. 'git pull') before pushing again.  See the 'Note about fast-forwards' section of 'git push --help' for details."}
            />
            <ErrorCard
                title={"! [rejected] branch -> branch (non-fast-forward)"}
                error={"Some quick example text to build on the card title and make up the bulk of the card's content.error: failed to push some refs to 'git@github.com:/reponame.git'<br /\> To prevent you from losing history, non-fast-forward updates were rejected Merge the remote changes (e.g. 'git pull') before pushing again.  See the 'Note about fast-forwards' section of 'git push --help' for details."}
            />
        </section>
    )
}

export default Error