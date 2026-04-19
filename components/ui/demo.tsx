// This is a demo of a preview
// That's what users will see in the preview

import { Hero1 } from "@/components/ui/hero-1";

const DemoOne = () => {
  return <Hero1 />;
};

// IMPORTANT:
// format of the export MUST be export default { DemoOneOrOtherName }
// if you don't do this, the demo will not be shown
export default { DemoOne };
