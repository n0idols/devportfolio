export default function Footer() {
  return (
    <footer className="bg-black-900">
      <section>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="big-title">Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and i'll get back to you as soon as possible.
          </p>
          <form className="flex flex-col" action="">
            <input type="text" name="name" placeholder="NAME" />
            <input type="email" name="email" placeholder="EMAIL" />
            <textarea
              placeholder="MESSAGE"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </form>
        </div>
      </section>
    </footer>
  );
}
