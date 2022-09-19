export default function Comments({ allComments }) {
    return (
        <div>
            {
                allComments.map((comment) => {
                    return (
                        <section>
                            <p>{comment.name}</p>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </section>
                    )


                })
            }
        </div>

    )
}