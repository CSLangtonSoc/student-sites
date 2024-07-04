# Langton CS Society Student Sites

To see a full list of existing websites, visit https://s.langtoncompsci.tech.

Student websites route to `s.langtoncompsci.tech/{directoryname}`.

# Tutorial

To add your website here, create a fork of this repository.

Make a folder inside the [/public](/public) directory with your website files inside.

Add a `meta.json` file in your folder with the following structure:

```json
{
  "name": "Example",
  "author": "CS Society",
  "description": "Example student website"
}
```

If you want to link an external website without uploading your own files, add a `redirectPath` attribute to your `meta.json`
file and set the value to the URL of the external site.

Finally, create a pull request to the repository and it will be added to the final site.
