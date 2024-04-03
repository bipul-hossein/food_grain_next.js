import Link from "next/link";

const PageNav = ({ BREADCRUMBS }) => {
  return (
    <nav className="lg:max-w-lg lg:self-end">
      <ol className="flex items-center space-x-2">
        {BREADCRUMBS.map((breadcrumb, i) => (
          <li key={i}>
            <div className="flex items-center text-sm">
              <Link
                href={breadcrumb.href}
                className="font-medium text-sm text-muted-foreground hover:text-gray-900"
              >
                {breadcrumb.name}
              </Link>
              {i !== BREADCRUMBS.length - 1 ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PageNav;
