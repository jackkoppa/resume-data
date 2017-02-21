## Summary
JSON source for current &amp; future projects requiring resume info - bio, previous projects, links, &amp; images.

## Usage
Currently, the repo is intended to be cloned within the project drawing data from it as a submodule. To use, navigate to the new project's root folder, and run the following:
```shell
git submodule add https://github.com/jackkoppa/resume-data resume-data
```

This will add `resume-data` as a dependency for the new project. Newer versions of git should download the repo contents; if you navigate to `resume-data` in your project and don't see anything, run the following from your project root:
```shell
git submodule update --init --recursive
```

And that's it! For most projects, this should be sufficient, and you will now have access to `resume.js` (for concatenating resume data into JS files, with the data contained in `resume["data"]`), `resume.json` (for importing from a local JSON feed), and the `img` directory (containing project images referenced in those files). Note that if changes are made to `resume-data` from another source, they will not be automatically reflected in the current project, and it will be necessary to again run `git submodule update --init --recursive` from root.

## Development
Submodules allow commits from within the submodule to affect the child, rather than the parent, repository. So it's possible to update `resume-data` while using it within another project. However, the repo relies on npm to write annotated JSON in `resume_annotated.json`, then output `resume.json` & `resume.js`. To make development changes, first install npm dependencies:
```shell
npm install
```

Then, after making changes to the annotated json file, run:
```shell
grunt compileJS
```

## References
See the [GitHub article](https://github.com/blog/2104-working-with-submodules) on repository dependencies for any questions re: submodules