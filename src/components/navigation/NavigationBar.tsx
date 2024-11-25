import * as React from "react";

interface NavigationItemProps {
  src: string;
  alt: string;
  className?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  src,
  alt,
  className,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain shrink-0 aspect-square ${className}`}
  />
);

const SearchBar: React.FC = () => (
  <form
    role="search"
    className="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/30daee91696e50582b29f674a06dfce59ba7eb1915768c099051de743a91a554?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
      alt=""
      className="object-contain shrink-0 w-5 aspect-square"
    />
    <label htmlFor="searchInput" className="sr-only">
      Search for something
    </label>
    <input
      type="search"
      id="searchInput"
      placeholder="Search for something"
      className="bg-transparent border-none outline-none text-slate-400 w-full"
    />
  </form>
);

interface BrandProps {
  logoSrc: string;
  title: string;
}

const Brand: React.FC<BrandProps> = ({ logoSrc, title }) => (
  <div className="flex gap-2.5 self-start text-2xl font-extrabold">
    <img
      loading="lazy"
      src={logoSrc}
      alt={`${title} logo`}
      className="object-contain shrink-0 aspect-square w-[35px]"
    />
    <h1 className="basis-auto">{title}</h1>
  </div>
);

const NavigationBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <Brand
          logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/926b72f3953fc305456c77479fbbd9fe16e7f5630232abc43a7fbf0a412ee5f4?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
          title="Soar Task"
        />
        <div className="flex items-center gap-4">
          <SearchBar />
          <NavigationItem
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1282d3e192feec94ae475ef73eb28b909a71ac3132d063d1c14a468cfb76ac82?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
            alt="Notifications"
            className="w-[50px]"
          />
          <NavigationItem
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b212169921a6d4d1b84e58eacde65487c9a45d151a81e9bd37de90dd00de55b6?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
            alt="Messages"
            className="w-[50px]"
          />
          <NavigationItem
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df88ffd4bfeb2489999e47e6774b8f19c7c5010336baa904189b93bddbaaece?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
            alt="User profile"
            className="w-[60px]"
          />
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
