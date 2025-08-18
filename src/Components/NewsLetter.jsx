export default function NewsLetter() {
  return (
    <section className="mt-15 sm:mt20">
      <div className="container text-center">
        <h2 className="text-3xl text-white font-medium">
          Subscribe now & get 20% off
        </h2>
        <p className="text-custom-lg text-soft-white font-medium mt-2">
          A short promotional message encouraging users to subscribe and receive
          a 20% discount.
        </p>
        <form className="max-w-[700px] mx-auto flex mt-7">
          <input
            type="email"
            placeholder="Your email"
            className="py-4 px-4 w-full rounded-l-lg border border-border text-mygray caret-primary placeholder-mygray focus:outline-none"
          />
          <button
            type="submit"
            className="inline-block py-4 px-6 sm:px-12 text-white bg-accent font-normal rounded-r-lg flex items-center gap-2 focus:outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
