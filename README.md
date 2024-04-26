# How to use this application?

1 - Clone the repository:

```bash

git clone git@github.com:sappmurais/portfolio-christbm.git

or

git clone https://github.com/sappmurais/portfolio-christbm.git

```

2 - Go to the project folder:

```bash

cd portfolio-christbm

```

3 - Make sure you are using a version of Node.js equal to or higher than the one in the *.nvmrc* file.

4 - Install dependencies

```bash

yarn install

```

5 - Run the development server:

```bash

yarn dev

```

6 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

7 - Go to the *.env.example* file to set the environment variables needed by the project, then rename the file to *.env* only.

8 - Modify the *data.json* file with your information. It is located in the following path **src/data/data.json**

9 - Replace the images:

1) *profile.jpg* with yours with the same format, this one is located in the folder **public/**
2) *favicon.ico* in **src/app/** folder
3) *opengraph-image.jpg* of 1200x630, in the folder **src/app/**

10 - **Done!**, now we just need to upload it to a new repository and deploy it on Vercel with a custom domain.
