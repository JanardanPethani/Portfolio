import TitleSection from "@/components/Blog/TitleSection";
import ImageSection from "@/components/Blog/ImageSection";
import DetailSection from "@/components/Blog/DetailSection";
import CodeSection from "@/components/Blog/CodeSectionDynamic";

export const blog = {
  slug: "css-view-transition-api",
  title: "Using CSS View-Transition API",
  publishDate: "2025-01-01",
  categories: ["CSS", "Transitions", "Web API"],
  excerpt:
    "Enhance your page transitions using the new CSS view-transition API.",
  thumbnail: "/images/blog/default-thumbnail.jpg",
  content: (
    <div className="relative">
      <TitleSection>Overview</TitleSection>
      <DetailSection>
        In this update I integrated the experimental CSS view-transition API to
        enable smoother page transitions.
      </DetailSection>
      <TitleSection>Implementation Steps</TitleSection>
      <DetailSection>
        <ol className="list-decimal list-inside">
          <li>
            Added CSS rules for view transitions using the ::view-transition
            pseudo-element.
          </li>
          <li>
            Triggered transitions via document.startViewTransition() before DOM
            updates.
          </li>
          <li>Configured easing and timing for a smooth effect.</li>
        </ol>
      </DetailSection>
      <TitleSection>Example</TitleSection>
      <CodeSection
        language="tsx"
        code={`/* CSS */
    @keyframes fade-in {
      from {
        opacity: 0;
      }
    }

    @keyframes fade-out {
      to {
        opacity: 0;
      }
    }

    @keyframes slide-from-right {
      from {
        transform: translateX(30px);
      }
    }

    @keyframes slide-to-left {
      to {
        transform: translateX(-30px);
      }
    }

    #main {
      view-transition-name: main;
    }

    ::view-transition-old(main) {
      animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
    }

    ::view-transition-new(main) {
      animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
        300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
    }

    /* JavaScript */
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!document.startViewTransition) {
          // browser does not support view transition. Continue the default behavior.
          return;
        } else {
          // browser supports view transition. Animate the transition.
          e.preventDefault();
          document.startViewTransition(() => {
            router.push(href as string);
          });
        }
    };`}
      ></CodeSection>
    </div>
  ),
};
