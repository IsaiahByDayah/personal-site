import { Meta, Story } from "@storybook/react"

import Bio, { BioBase, BioBaseProps } from "components/blog/Bio"

export default {
  title: "Blog/Bio",
  parameters: {
    layout: "centered",
  },
} as Meta

const avatar = {
  base64:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADt0lEQVQ4y3WUS2wbVRSGZ+zM2OPYaZrUTmM7UQotFYkUpbEdJ21TO0lpXo5tJRVNIbGaziS2m4AXdAFSF4gFILFIEVCKkNiVlwR9pCUkm5ZKiAVLEAI2CBbdVAK1YoM9cw//nZnUiRRf6fe5M/ecb/5z544FwR51LteTWCfLTnsuO2X5EGK/5HJdhUpuxR1ErHPI8o66XQdfdFbBUcB+QPF/sttVAYAESSLcKwP6mpkkSY6a0O0OUZSEHmNOQp1Egugkj0cpN/q8ZYnfEx0PXG53wCqQxFruRDs2QH9xmChJ5cDeBrY02M0+OjtMn54bZaszCfZc14GKIIgRnt/gq3dcGo/vCtyyf5TD0KKheBR2+XSCfffyNLtdmKJb+RTbXM7oGxcy9O7pxCjPvzo77Kzl0ASi1RjaMjhUURT2/vNJE/a1NkE3FicRJyuby1m6nZ+6wvPXi2nHzaVUbSD2pluUZIaWqCPQxL5YGGe3llImDGIo1r8ppvn8t7X8lMRrMK+9hxgKQH8cat1Hg8+0G2iPXbdgBBhD1L9Fy5jft2FiLYfCwzdV0+Wro7HVtXyKSsO9lS0QRNc1E2wC0frPcCrXdMjHS0NHTOBc37PHN1emqTR0hG8+4y1+pU7QxnKGMNfvFNKEffx9dXrQzfOxtrvDrrYWgX78xGz9vbmxd9Tj3TTTc5DdL80w3vrb6WMUaW/Re9oCVBzsvsvzmr2Ko+ZXwsf4Qb/wxrk5E3rxZGRtf0M9rc6cqFwc6aWxzg56fSKuf3hmiDpbm39FiteqFoVQn1aFBWPWRUcsJ/hjBcdC4qhsnbGRDxo9+DIEoQyx2ehhuleaNnD2qHVP/T+49zTPcze2mS5DfaoFBF2EnMGY+sT+W2eyp7BXf2M/OdDgQIj8Po/OI/RLsvOws2pKdZou8bNjD57qPx/d27v4ZXI4RxvFKcLBNV4ZiVBP2E9el0z4n2FeXxMFurL/hvvz3wej53PhgQuiDRVth6oH4AR0DaK2gSLtiyzS/ORZYz0/QXdXMuxOMcOuzI7QZ/NDlDn1AmuKFal9oEDh/gIB9BPqclvt+gBcx1PMRQ7EdQVizYCOnZxjH+fSjIPvraTocy3Luo4tUEtUZcjRAdND8TyFB5Z53SVu808bZC0CFLSgLAw1AdoRV2khNUuXX8zSieQ8NUc0cw0v0zagwcAinGqPhFB8iRfr9gIXC9nJXCik/Ygc7I9qFIiaDyMLppoPtusMHvmRMaogjVXB6o7C8DZtg20zYcX/AZMost9Qti5qAAAAAElFTkSuQmCC",
  height: 50,
  width: 50,
  src: "/static/4ff986be0da3f690607e73f511d31856/8ba1e/profile-pic.png",
  srcSet:
    "/static/4ff986be0da3f690607e73f511d31856/8ba1e/profile-pic.png 1x,\n/static/4ff986be0da3f690607e73f511d31856/f937a/profile-pic.png 1.5x,\n/static/4ff986be0da3f690607e73f511d31856/71eb7/profile-pic.png 2x",
}

export const Basic: Story<BioBaseProps> = (args) => <BioBase {...args} />
Basic.argTypes = {
  name: {
    control: "text",
  },
  summary: {
    control: "text",
  },
  avatar: {
    control: { type: "select", options: [undefined, avatar] },
  },
  twitter: {
    control: "text",
  },
}
Basic.args = {
  name: "Lorem Fugiat",
  summary: "Eiusmod ullamco ut incididunt labore magna cillum eu.",
  twitter: "movieotter",
}

export const WithAvatar: Story<BioBaseProps> = (args) => <BioBase {...args} />
WithAvatar.argTypes = {
  ...Basic.argTypes,
}
WithAvatar.args = {
  ...Basic.args,
  avatar,
}

export const WithStatic: Story = () => <Bio />
WithStatic.parameters = {
  storyshots: {
    disable: true,
  },
}
