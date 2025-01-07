import clsx from "clsx";

const button = ({ icon, children, href }) => {
  return href ? (
    <a className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}>


    </a>
  ) : (
    <button className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}>

    </button>
  )
}

export default button